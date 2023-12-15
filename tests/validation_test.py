from sdms_server.validation.validation import validate_user_id, validate_role, validate_course_id, validate_department_id

def test_validate_user_id():
    assert validate_user_id("john123")
    assert validate_user_id("jane.doe")
    assert validate_user_id("admin@sdms")
    assert not validate_user_id("john!@#")
    assert not validate_user_id("john doe")
    assert not validate_user_id("")

def test_validate_role():
    assert validate_role("admin")
    assert validate_role("student")
    assert not validate_role("123")
    assert not validate_role("admin@sdms")
    assert not validate_role("")

def test_validate_course_id():
    assert validate_course_id("cs101")
    assert validate_course_id("math-101")
    assert not validate_course_id("cs@101")
    assert not validate_course_id("cs 101")
    assert not validate_course_id("")

def test_validate_department_id():
    assert validate_department_id("cs")
    assert validate_department_id("mathematics")
    assert not validate_department_id("cs@")
    assert not validate_department_id("cs 101")
    assert not validate_department_id("")
