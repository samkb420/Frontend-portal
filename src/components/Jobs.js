import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
// import './jobs.css'

export default class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 4,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://proxify-cors.herokuapp.com/proxy?u=http://attachmentapi.herokuapp.com/api/v4/jobs`)
            .then(res => {

                const data = res.data;
                console.log(data)
                // const available = {pd.open};
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <div className="card mt-2 ">
                    <div className="card-body">
                    <div>
                    <h4>{pd.title} <small> posted by </small>{pd.company_name}<span>
                    </span></h4>
                    </div>
                    <p>
                    {pd.description.slice(0, 70)} <span><i  className="fa fa-external-link-alt fa-1x"> </i></span>
                    </p>
                        <div className="status_open"> 
                        <i  className="fa fa-circle fa-2x"> </i>
                        </div>
                        <div className="status_closed"> 
                        <i  className="fa fa-circle fa-2x"> </i>
                        </div>
                    </div>
                    </div>
                    
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}