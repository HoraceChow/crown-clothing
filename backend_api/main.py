from flask import Flask,jsonify
from flask_restful import Api, Resource, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from models import Category_model,Items_model
"""
db.drop_all()
db.create_all()
"""
class Data_app(Resource):
    def get(self):
        category_list = {}
        categories = Category_model.query.all()
        for category in categories:
            category_list[category.routeName] = {
                'id': category.id,
                'title': category.title,
                'routeName': category.routeName,
                'items': [{
                    'id': item.item_id,
                    'name':item.name,
                    'imageUrl':item.imageURL,
                    'price':item.price}
                    for item in Items_model.query.filter_by(cate_id=category.id)]
            }
        return jsonify(category_list)
api.add_resource(Data_app,'/')
if __name__ == '__main__':
    app.run(debug=True)
