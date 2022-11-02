import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'
import moment from 'moment'


function TodoList() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perpage] = useState(5);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    loadUserData();
  },[]);

  const loadUserData = async () => {
    const res = await axios
      .get("https://gorest.co.in/public/v2/todos",
        {
          headers:
          {
            "Authorization": `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
            'Content-Type': 'application/json'
          }
        })
    const user = res.data;
    const slice = user.slice(offset, offset + perpage)
    setData(slice)
    setPageCount(Math.ceil(user.length / perpage))
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    // console.log(selectedPage, "output")
    setOffset(selectedPage * perpage)
  };
  const handleFilter = async (value) => {
    return await axios
      .get(`https://gorest.co.in/public/v2/todos?status=${value}`,
        {
          headers:
          {
            "Authorization": `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
            'Content-Type': 'application/json'
          }
        })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }
  const handleData = async () => {
    return await axios
      .get(`https://gorest.co.in/public/v2/todos`,
        {
          headers:
          {
            "Authorization": `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
            'Content-Type': 'application/json'
          }
        })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }


  return (

    <div>
      <h2>Status Filter</h2>
      <button className='btn btn-info m-2' onClick={() => handleData()}>All</button>
      <button className='btn btn-success m-2' onClick={() => handleFilter("completed")}>Completed</button>
      <button className='btn btn-danger m-2' onClick={() => handleFilter("pending")}>Pending</button>

      <Row>
        <Col>
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            {data.length === 0 ? (
              <tbody>
                <tr>
                  <td>No Data Found</td>
                </tr>
              </tbody>
            ) : (
              data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{moment(item.due_on).format('DD/MM/YYYY')}</td>
                    <td>{item.status}</td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </Col>
      </Row>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        subContainerClassName={"page-item"}
        activeClassName={"active"} />

    </div>

  )
}


export default TodoList;