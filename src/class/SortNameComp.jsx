import React, { Component } from 'react';

import arrayData from '../service/FarrayData';
import arrayToObj from '../service/FarrayToObj';
import SortingNames from '../service/FsortingName';
import BackToArray from '../service/FbackToArray';
import GetData from '../service/FgetData';

class SortNameComp extends Component {

    state = {
        names: ""
    }
    //mengambil data dari file sorted-names.txt dan menyimpannya ke variabel names
    handleGetData = () => {
        GetData().then((data) => {
            let string = data;
            this.setState({
                names: string
            });
        });
    }
    //mengubah data pada variabel names menjadi array
    handleDataToArray = () => {
        let arrayNames = arrayData(this.state.names);
        this.handleArrayToObject(arrayNames);
    }
    //mengubah data arry menjadi array of object
    handleArrayToObject = (arrNames) => {
        this.handleSortingName(arrayToObj(arrNames));
    }
    //melakukan pengurutan data nama
    handleSortingName = (arrObj) => {
        this.handleBackToArry(SortingNames(arrObj));
    }
    //mengubah array yang sudah diurutkan menjadi string
    handleBackToArry = (sortedNames) => {
        this.setState({
            names: BackToArray(sortedNames)
        })
    }
    //mendownload data yang ada pada variable names 
    handleDownload() {
        var download = document.querySelector('.download');
        download.setAttribute('href', 'data:text/plain;charset=utf-8,'
            + encodeURIComponent(this.state.names));
        download.setAttribute('download', 'sorted-names-list.txt');
    }
    handleChange = () => {

    }

    componentDidMount() {
        this.handleGetData()
    }


    render() {
        return (
            <div className="container">
                <div className="btn">
                    <button type="submit" onClick={() => this.handleDataToArray()}>urutkan</button>
                    <a href="#" className="download" onClick={() => this.handleDownload()}>Download</a>
                </div>
                <div className="content">
                    <textarea name="names" id="" cols="50" rows="10"
                        value={this.state.names}
                        onChange={() => this.handleChange()}
                        disabled></textarea>
                </div>
            </div>
        )
    }

}
export default SortNameComp;
