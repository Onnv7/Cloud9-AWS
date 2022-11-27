import React from 'react'
import './ListProduct.css'

function ListProduct() {
  return (
    <div>
        <table class="table">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">img</th>
      <th scope="col">price</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>HomePage</td>
      <td>
        <img src={"https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"} width='200px' height={"200px"}/>
      </td>
      <td>29</td>
      <td className='txt-center'>
        <a href="" class="btn btn-link">Sửa</a>
        <a href="" class="btn btn-link">Xóa</a>
        </td>
    </tr>
  </tbody>
</table>
<a href='http://localhost:3000/productadd' className='btn btn-link'>Thêm</a>
    </div>
  )
}

export default ListProduct