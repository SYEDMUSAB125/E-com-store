import os
from flask import Flask, request, jsonify, send_from_directory
import psycopg2
import urllib.parse as up
from werkzeug.utils import secure_filename
import json  # For handling sizes as JSON
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set the path for image upload
UPLOAD_FOLDER = 'assets/products'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Database connection
def get_db_connection():
    db_url = "postgresql://neondb_owner:BjJgk9aAiP8t@ep-summer-leaf-a5yhly48.us-east-2.aws.neon.tech/neondb?sslmode=require"
    url = up.urlparse(db_url)
    connection = psycopg2.connect(
        host=url.hostname,
        database=url.path[1:],
        user=url.username,
        password=url.password,
        port=url.port,
        sslmode='require'
    )
    return connection

# Serve static files
@app.route('/assets/products/<path:filename>')
def serve_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


# Add product endpoint
@app.route('/add_product', methods=['POST'])
def add_product():
    if 'image' not in request.files:
        return jsonify({"message": "No image file part"}), 400

    image = request.files['image']
    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = f"{app.config['UPLOAD_FOLDER']}/{filename}".replace('\\', '/')# Use forward slashes for consistency
        image.save(image_path)

        data = request.form
        name = data.get("name")
        title = data.get("title")
        description = data.get("description")
        price = data.get("price")
        category = data.get("category")
        sub_category = data.get("subCategory")
        
        # Extract sizes from the form data (small, medium, large)
        sizes_data = {
            "small": data.get("small") == "true",
            "medium": data.get("medium") == "true",
            "large": data.get("large") == "true"
        }

        sizes = [size for size, is_selected in sizes_data.items() if is_selected]

        colors = data.get("colors")  # Expect a comma-separated string
        quantity = data.get("quantity")
        date = data.get("date") or datetime.today().strftime('%Y-%m-%d')
        bestseller = data.get("bestseller") == "true"

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO products 
            (name, title, description, price, category, sub_category, sizes, colors, quantity, date, bestseller, images)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """,
            (name, title, description, price, category, sub_category, json.dumps(sizes), colors, quantity, date, bestseller, image_path)
        )

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Product added successfully!"}), 201

    return jsonify({"message": "Invalid file format"}), 400

@app.route('/get_products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM products;")
    products = cursor.fetchall()

    products_list = []
    for product in products:
        sizes = product[7]
        if isinstance(sizes, str):  # If it's a string, parse it as JSON
            sizes = json.loads(sizes)
        
        image_url = f"http://127.0.0.1:5000/{product[12].replace('\\', '/')}"
        products_list.append({
            "id": product[0],
            "name": product[1],
            "title": product[2],
            "description": product[3],
            "price": product[4],
            "category": product[5],
            "sub_category": product[6],
            "sizes": sizes,
            "colors": product[8].split(','),  # Convert comma-separated string to list
            "quantity": product[9],
            "date": product[10],
            "bestseller": product[11],
            "images": image_url
        })

    cursor.close()
    conn.close()

    return jsonify(products_list)

# Create products table
def create_products_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10, 2) NOT NULL,
            category VARCHAR(100),
            sub_category VARCHAR(100),
            sizes JSONB,
            colors TEXT,
            quantity INT DEFAULT 0,
            date DATE,
            bestseller BOOLEAN DEFAULT FALSE,
            images TEXT
        );
    """)
    conn.commit()
    cursor.close()
    conn.close()

create_products_table()

if __name__ == '__main__':
    app.run(debug=True)
