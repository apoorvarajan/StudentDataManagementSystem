from sdms_server.authorization.permission import (
    is_enrolled_in_course,
    is_instructor_of_course,
    is_ta_of_course,
    is_ta_or_instructor_of_course,
    is_self,
)

# Test is_enrolled_in_course function
def test_is_enrolled_in_course():
    assert is_enrolled_in_course("user1", course_id="CSE101")
    assert not is_enrolled_in_course("user2", course_id="CSE101")
    assert not is_enrolled_in_course("user1", course_id="CSE102")

# Test is_instructor_of_course function
def test_is_instructor_of_course():
    assert is_instructor_of_course("user1", course_id="CSE101")
    assert not is_instructor_of_course("user2", course_id="CSE101")
    assert not is_instructor_of_course("user1", course_id="CSE102")

# Test is_ta_of_course function
def test_is_ta_of_course():
    assert not is_ta_of_course("user1", course_id="CSE101")
    assert is_ta_of_course("user2", course_id="CSE101")
    assert not is_ta_of_course("user1", course_id="CSE102")

# Test is_ta_or_instructor_of_course function
def test_is_ta_or_instructor_of_course():
    assert is_ta_or_instructor_of_course("user1", course_id="CSE101")
    assert is_ta_or_instructor_of_course("user2", course_id="CSE101")
    assert not is_ta_or_instructor_of_course("user1", course_id="CSE102")

# Test is_self function
def test_is_self():
    assert is_self("user1", user_id="user1")
    assert not is_self("user1", user_id="user2")
    assert is_self("user2", user_id="user2")
