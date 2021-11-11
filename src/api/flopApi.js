import service from './axios'

class flopService {
  rollCardActivity() {
    return service({
      method: 'post',
      url: '/shop/rollCardActivity/index',
      data: {
        id: '1'
      }
    });
  }
}

const flopApi = new flopService();
export default flopApi;
