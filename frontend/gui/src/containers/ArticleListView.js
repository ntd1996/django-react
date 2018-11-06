import React from 'react';
import Article from '../components/Article';
import CustomForm from '../components/Form';
import FooterLayout from '../components/Footer';
import axios from 'axios';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/")
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <Article data={this.state.articles} />
                <h2>
                    Create an articles
                </h2>
                <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Create"
                />
                <FooterLayout />
            </div>
        )
    }
}
export default ArticleList;