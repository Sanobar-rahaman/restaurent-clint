import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import useManu from "../../Hooks/useManu";
import OrderTab from "./Ordertab/OrderTab";


const Order = () => {
    const[tabIndex,setTabIndex] = useState(0)
   const [manu] = useManu()
    const desserts = manu.filter(item=>item.category ==='dessert')
    const soup = manu.filter(item=>item.category === 'soup')
    const salad = manu.filter(item=>item.category === 'salad')
    const pizza = manu.filter(item=>item.category === 'pizza')
    const drinks = manu.filter(item=>item.category === 'drinks')
    return (
        <div>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className=" flex gap-5 justify-center mt-10 items-center mb-5">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;