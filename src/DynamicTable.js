import React, {Component} from 'react';
import {Button, Pagination, Table} from 'react-materialize'
import Axios from 'axios'

class DynamicTable extends Component {


    constructor(props) {
        super(props);
        this.state = {
            page: {data: [], curPage: 1, pageSize: 0, pagerSize: 0},
            headers: []
        }
    }
    /**
     * 组建加载
     */
    componentDidMount() {
        this.handleHeaders();
        let that = this;
        Axios.get('/modules')
            .then(res => {
                console.log(res);
                that.setState({
                    page: res.data
                })
            });
    }

    handleHeaders() {
        let that = this;
        Axios.get('/modules/headers')
            .then(res => {
                that.setState({headers: res.data})
            });
    }

    render() {
        const headers = this.state.headers.map((header) => {
            return <th key={Math.random()}>{header.desc}</th>
        });
        const handleContent = (content) => {
            return this.state.headers.map((column) => {
                var contentElement = content[column.name];
                if (Array.isArray(contentElement)) {
                    return <td key={Math.random()}>{
                        contentElement.map((ele) => {
                            return <Button key={Math.random()} waves='light'>{ele}</Button>
                        })
                    }</td>;
                }
                return <td key={Math.random()}>{contentElement}</td>
            });
        };
        const contents = this.state.page.data.map((content) => {
            return <tr key={Math.random()}>{handleContent(content)}</tr>
        });
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        {headers}
                    </tr>
                    </thead>

                    <tbody>
                    {contents}
                    </tbody>
                </Table>
                <Pagination className='float-right' items={this.state.page.count}
                            activePage={this.state.page.curPage} maxButtons={this.state.page.pagerSize}/>
            </div>
        );
    }
}

export default DynamicTable;
