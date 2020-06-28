import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('https://api.unsplash.com/search/photos', {
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID 72a050b4092880644836a006425c9ce53604d34b40756c38b76c9930e622be7f'
			}
		});

		this.setState({ images: response.data.results });
	};

	render () {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
