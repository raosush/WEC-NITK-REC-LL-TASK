# README

This web application, written in Rails, completes the following [task](https://github.com/WebClub-NITK/DSC-NITK-Recruitments-2020/blob/master/RECRUITMENT_TASKS_2020.md#task-id-lazy_loading)

## Tech Stack

* [Will Paginate](https://github.com/mislav/will_paginate) => Paginate records.
* [Bootstrap SASS](https://github.com/twbs/bootstrap-sass#a-ruby-on-rails) => Import Bootstrap stylesheets.
* [Bootstrap Will Paginate](https://github.com/yrgoldteeth/bootstrap-will_paginate) => Import bootstrap classes to style pagination URLs.
* The above open source gems(library equivalent of Ruby) have been used to complete the task.

## Introduction

* This web application implements lazy loading for posts and images.
* Lazy loading for posts has been implemented by pagination at the backend and AJAX requests to the controller action, on a scroll event.
* Lazy loading for images has been done using two methods - 1) Unveil JS 2) Custom JS

## Testing

* Once you have followed the instructions for [installations](INSTALLATION.md), the PUMA server would be up and running.
* Open a browser and navigate to `localhost:<port>/posts`, for lazy loading in posts, according to user's consent(on scroll event). Lazy loading in posts is throttled using [Loadash](https://lodash.com/)
* Navigate to `localhost:<port>/posts/load_more_button`, for lazy loading in posts, according to user's consent(on clicking a button) to retrieve more information from backend.
* Navigate to `localhost:<port>/posts/lazy_load_unveil_images`, for lazy loading in images, implemented using [Unveil JS](https://github.com/luis-almeida/unveil)
* Navigate to `localhost:<port>/posts/lazy_load_images`, for lazy loading in images, using a custom JS.

## Resources

* [Infinite Scrolling](https://github.com/josefzacek/infinite-scrolling)
* [CSS for Posts](https://codepen.io/Booligoosh/pen/mKPpQp)
* [CSS for images](https://codepen.io/FilipVitas/pen/pQBYQd)
