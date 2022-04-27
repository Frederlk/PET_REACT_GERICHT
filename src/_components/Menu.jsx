import React from "react";

const Menu = ({ className = "", title, data }) => {
    const menuItems = data.map(({ title, tags, price }, i) => (
        <li key={title + i} className="special-menu__item special-item-menu">
            <div className="special-item-menu__top">
                <h4 className="special-item-menu__title">{title}</h4>
                <div className="special-item-menu__line"></div>
                <div className="special-item-menu__price">${price}</div>
            </div>
            <div className="special-item-menu__tags">
                {tags.map((tag, i) => (
                    <span key={tag + i} className="special-item-menu__tag">
                        {tag}
                    </span>
                ))}
            </div>
        </li>
    ));

    return (
        <div className={`${className} special-menu`}>
            <h3 className="special-menu__title">{title}</h3>
            <ul className="special-menu__list">{menuItems}</ul>
        </div>
    );
};

export default Menu;
