import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules';

import { ApolloProvider } from './providers/ApolloProvider';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Spinner } from './components/Spinner/Spinner';

import { store } from './stores/store';

import './App.css';

bemCssModules.setSettings({
	modifierDelimiter: '--',
	// eslint-disable-next-line @typescript-eslint/naming-convention
	throwOnError: true,
});

export const App: React.FC = () => (
	<Suspense fallback={Spinner}>
		<ApolloProvider>
			<Provider store={store}>
				<div className="app">
					<BrowserRouter >
						<Header />
						<Content />
					</BrowserRouter>
				</div>
			</Provider>
		</ApolloProvider>
	</Suspense>
);
