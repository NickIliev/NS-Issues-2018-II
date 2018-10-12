import { TestBed, inject } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';

describe('a movies component', () => {
	let component: MoviesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MoviesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MoviesComponent], (MoviesComponent) => {
		component = MoviesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});