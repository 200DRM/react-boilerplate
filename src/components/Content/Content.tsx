import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { About } from '../About/About';
import { LaunchesPastListing } from '../../container/LaunchesPastListing';
import { RocketDetail } from '../../container/RocketDetail';
import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => (
	<section className={style()}>
		<Switch>
			<Route component={About} path="/about" />
			<Route component={RocketDetail} path="/rocket/:id" />
			<Route component={LaunchesPastListing} path="/" />
		</Switch>
	</section>
);
