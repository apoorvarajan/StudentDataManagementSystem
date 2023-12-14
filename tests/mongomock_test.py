import mongomock

def increase_votes(collection):
    collection.update_many({}, {'$inc': {'votes': 1}})

def test_increase_votes():
    collection = mongomock.MongoClient().db.collection
    objects = [dict(votes=1), dict(votes=2)]
    for obj in objects:
        obj['_id'] = collection.insert_one(obj).inserted_id
    increase_votes(collection)
    for obj in objects:
        stored_obj = collection.find_one({'_id': obj['_id']})
        stored_obj['votes'] -= 1
        assert stored_obj == obj # by comparing all fields we make sure only votes changed

def get_user_db():
    user_db_data = {
        'students': [
            {'user_id' : 'student1',
            'courses': ['course1', 'course2']},
            {'user_id' : 'student2',
            'courses': ['course1']}]}
    
    mock_user_db = mongomock.MongoClient().db
    mock_user_db.students.insert_many(user_db_data['students'])

    return mock_user_db

def is_enrolled_in_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    user_db = get_user_db()
    user = user_db.students.find_one({'user_id': _user_id})
    if user is None:
        return False
    return course_id in user.get('courses', list())

def test_is_enrolled_in_course():
    assert is_enrolled_in_course('student1', course_id='course1')
    assert not is_enrolled_in_course('student2', course_id='course2')
    assert not is_enrolled_in_course('student1', course_id='course3')
    assert not is_enrolled_in_course('student3', course_id='course3')