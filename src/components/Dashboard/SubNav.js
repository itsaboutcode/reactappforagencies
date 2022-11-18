import React from "react";


const stockDataSubNav = [
    {
        title:'Ratings',
    },
    {
        title:'Brands',
    },
    {
        title:'Traits',
    },
    {
        title:'Maturities',
    },
    {
        title:'Hybrids',
    },
    {
        title:'Add Rating',
    },
    {
        title:'Pending Variety Tags',
    }
   
    
  ];
  
  const subNavItems = () => {
    let subNavItemsContent = [];
    
    for (let i = 0; i < stockDataSubNav.length; i++) {
        console.log(stockDataSubNav[i].imgSrc);
        subNavItemsContent.push(
            <li><a href="javascript:;">{stockDataSubNav[i].title}</a></li>
        );
    }
    return subNavItemsContent;
  };




const SubNav = () => {
    return(
        <>
            <ul>
                {subNavItems()}
            </ul>
        </>
    )
}

export default SubNav;