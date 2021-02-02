import _fetch from 'isomorphic-fetch';
import React from 'react'
import PopUp from './PopUp';

class QuestionList extends React.Component {

    state = {
        contacts: [],
        per: 10,
        page: 1,
        totalPages: null,
        scrolling: false
    }

    componentWillMount() {
        this.loadContact();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        })
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;
        if (scrolling || totalPages <= page) return;
        const lastLi = document.querySelector('ul.contacts >  li:last-child')
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if (pageOffset - 20 >= lastLiOffset - bottomOffset) {
            this.loadMore()
        }
    }

    loadContact = () => {

        const { per, page, contacts } = this.state;
        const url = `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=${per}&order=desc&sort=activity&site=stackoverflow&filter=!9_bDDx5Ia`
        _fetch(url)
            .then(response => response.json())
            .then(json => this.setState({
                contacts: [...contacts, ...json.items],
                scrolling: false,
                totalPages: json.items.length
            }));
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true
        }), this.loadContact);
    }

    render() {
        return (
            <div>
                <ul className="contacts">
                    {
                        this.state.contacts.map(contact => <li key={contact.owner.user_id}>
                            <PopUp {...contact} />
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default QuestionList;