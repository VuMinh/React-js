# redux-kpt
Clone it to your machine. run

npm install
webpack -w
Then open new Terminal (CMD) tab and run "node index"
### Nếu sử dụng "props" trong Component => cần phải có propsTypes và defaultProps => để xác định kiểu dữ liệu và kiểu props cần chuyền vào.
# Một số hàm phổ biến trong Component:
## componentWillMount(): 
- thực hiện một số tác vụ, khi Component mount => hàm này chỉ thực hiện một lần duy nhất.
## componentDidMount(): 
- thực hiện một số tác vụ, chỉ thực hiện một lần duy nhất
	- hàm này được gọi để thông báo Component đã tồn tại trên DOM => tức là hàm Render đã chạy
	=> từ đó các thao tác trên DOM sẽ thực hiện bình thường
## componentWillUnmount():
- hàm này chỉ thực hiện một lần duy nhất, khi Component unmount, hay dùng để xóa các timer hoặc EventListener không còn sử dụng.
## componentWillReceiveProps(nextProps):
	- Hàm thực hiện liên tục khi Props thay đổi.
	- Sử dụng với mục đích:
    1. Sử dụng thay đổi trạng thái (state) của Component phụ thuộc props
    2. Sử dụng các kết quả, khởi tạo biến có tính chất async (bất đồng bộ)
## shouldComponentUpdate(nextProps, nextState):
  - thực hiện khi (state) và (props) thay đổi
  - trả về kết quả true/false
  - Sử dụng hàm này để để xử lý xem có cần update Component không.
## componentWillUpdate(nextProps, nextState):
  - Thực hiện dựa vào kết quả của hàm (shouldComponentUpdate), nếu hàm (shouldComponentUpdate) trả về false => thì hàm này sẽ không được gọi.
## componentDidUpdate(prevProps, prevState):
  - Thực hiện khi Component được render lại.
  
 
