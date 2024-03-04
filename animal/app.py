from flask import Flask, request, render_template, redirect, url_for
import os
app = Flask(__name__, static_url_path='/static')
app.config['UPLOAD_FOLDER'] = 'static/uploads'

@app.route('/uploads', methods=['POST'])
def upload():
    image = request.files['image']
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image.filename).replace(os.path.sep, '/')
    print(image_path)
    image.save(image_path)
    print("Hello python")
    print(image_path)
    return render_template('result.html', image_path=image_path)


@app.route('/')
def index():
    image_path = request.args.get('image_path')
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)