import { DatePicker, Button } from 'antd';
import React from 'react';
import { Select } from 'antd';
import '../Pages/Main.css'



const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
  }
  

export default class FilterSection extends React.Component {
    render(){
        return(
            <div className= "justify-between bg-gray-200 filter-style px-1" >
                <div className="left flex flex-wrap justify-start">
                        <div className="filter" >
                            <RangePicker onChange={onChange} />
                            </div>
                        <div className="filter"> 
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Druma gore filtrele" onChange={handleChange}>
                            {children}
                        </Select>
                        </div>
                        <div className="filter">
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Kullaniciya gore filtrele" onChange={handleChange}>
                            {children}
                        </Select>
                        </div>
                        <div className="filter">
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Musteriye gore filtrele" onChange={handleChange}>
                            {children}
                        </Select>
                        </div>
                </div>
                

                <div className="right">
                        <button type="button" class="ant-btn mb-2 sm:mb-1 ant-btn-default" disabled><span>Filtreleri temizle</span></button>

                </div>
           
          </div>
        )
    }
}







