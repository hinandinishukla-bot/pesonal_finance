# Personal Finance Budget Planner

A web-based personal finance management application developed using Django, Python, HTML, CSS, JavaScript, and SQLite.

## Project Overview

The Personal Finance Budget Planner helps users manage and monitor their personal finances in one place. Users can create an account, track their income and expenses, manage budgets, and monitor their savings goals through a simple and user-friendly dashboard.

## Features
* Dashboard with financial summaries (Total Balance, Income, Expenses, Savings).
* Interactive data visualization for money flow and budget breakdowns.
* Recent transaction tracking.
* Responsive and custom-styled user interface.

## Technologies Used

* **Backend:** Python, Django
* **Frontend:** HTML5, CSS3, JavaScript
* **Database:** SQLite (Django default)
* **Charts:** Chart.js

## Project Structure

```text
Budgetproject/
│
├── finance/
│   ├── migrations/
│   ├── static/
│   │   └── finance/
│   │       ├── css/
│   │       ├── js/
│   │       └── images/
│   │
│   ├── templates/
│   │   └── finance/
│   │       ├── base.html
│   │       ├── home.html
│   │       └── registration/
│   │           └── register.html
│   │
│   ├── admin.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
│
├── finance_project/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── manage.py
├── requirements.txt
├── .gitignore
└── README.md