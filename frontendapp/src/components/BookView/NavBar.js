import React, { Component } from 'react';

class NavBar extends Component {
    onFilterSelect = (category) => {
        this.props.onFilterClick(category);
    }

    getBookCategories = async () => {
        try {
            let url = `http://127.0.0.1:8000/api/category`;

            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const json_response = await response.json().parse();
            return json_response;

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let categoryData = this.getBookCategories();
        const categories = categoryData.map((x, index) => {
            let style = 'CategoryButton ' + (this.props.activeTab == x.categorydesc ? 'CategoryButtonActive' : '');
            return (
                <button key={index} onClick={() => this.onFilterSelect(x.categorydesc)} className={style}>
                    {x.categorydesc}
                </button>
            )
        });
        return (
            <div className='NavBar'>
                {categories}
            </div>
        );
    }
}

export default NavBar;