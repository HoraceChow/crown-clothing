from __main__ import db


class Category_model(db.Model):
    __tableName__ = 'category_model'

    id = db.Column(db.Integer, primary_key = True)
    routeName = db.Column(db.String(15)) 
    title = db.Column(db.String(15))

    def __repr__(self):
        return ' '.join([id,routeName,title])

class Items_model(db.Model):
    __tableName__ = 'items_model'

    cate_id = db.Column(db.Integer)
    item_id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(40)) 
    imageURL = db.Column(db.String(100))
    price = db.Column(db.Integer)

    def __repr__(self):
        return ' '.join([cate_id,id,name,imageURL,price])