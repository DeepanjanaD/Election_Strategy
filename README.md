# ElectionStrategy

## Aim

A solution to assist election candidates with data-driven strategies. Collects and aggregates granular voter data for targeted campaigns.

## Back End And Database

Manages entities and repositories.
Supports RESTful APIs for data operations.
Entities include Election, Constituency, Gram Panchayat, Mandal, Municipalities, Wards, Booth, Colonies, Apartment, Voter Data, etc.
Provides endpoints for adding, updating, deleting, and viewing data.

## Front End

Manages only colonies, apartments, booths, and voter data.
Offers features for colony and booth management, colony associations, and mainly aggregated data view.
Restricts all information of Wards for security.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
