import React, {useEffect, useState} from "react";
import {Table} from "antd";
import axios from "axios";
const rubyfiCli = axios.create({
    baseURL: 'https://rubyfi.nlimpid.workers.dev/api'
});

// axios.defaults.crossDomain = true
//Access-Control-Allow-Origin 指向前端 ip:port
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;

let rubyfiHeaders =  {
    'Access-Control-Allow-Credentials':true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
}

type IPOParam = {
    page: string;
    limit: string;
};

export const ipoResponse = (params:IPOParam) => rubyfiCli.get('/ipos', {
    params: params,
    headers: rubyfiHeaders,
    // withCredentials: true,

});


const dataSource = [
    {
        key: '1',
        symbol: "",
        price:"",
        offer:"",
        shares:"",
        mkt: "",
    },
];

const IpoUSList: React.FC = () =>{
    const [ipoList, setIpoList] = useState([]);

    const columns = [
        {
            title: "symbol",
            dataIndex: "symbol"
        },
        {
            title: "price",
            dataIndex: "range",
        }
    ];

    useEffect(() => {
        ipoResponse({
            page: "0",
            limit: "10",
        }).then(
            res => {
                console.log("response.results", res.data.listed);
                setIpoList(res.data.listed)
            }
        ).catch(err => console.log(err));
    }, []);

    return (
        <Table dataSource={ipoList} columns={columns} />
    )
}


export default IpoUSList;
