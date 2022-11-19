import React from "react";


  const subNavItems = (subMenu) => {
    let subNavItemsContent = [];
    
    for (let i = 0; i < subMenu.length; i++) {
        console.log(subMenu[i].imgSrc);
        subNavItemsContent.push(
            <li><a href="javascript:;">{subMenu[i]}</a></li>
        );
    }
    return subNavItemsContent;
  };




const SubNav = ({subMenu}) => {
    return(
        <>
            <ul>
                {subNavItems(subMenu)}
            </ul>
        </>
    )
}

export default SubNav;