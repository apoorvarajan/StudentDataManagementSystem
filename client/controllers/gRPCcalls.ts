import  {GradeRequest} from '../src/proto/frontend_pb'

function getUsers() {
    return new Promise((resolve, reject) => {
      const stream = new GradeRequest();
      console.log(stream)
    });
  }
