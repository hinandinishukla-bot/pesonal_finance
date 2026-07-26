from django.db import models
from django.contrib.auth.models import User


class Income(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.source} - {self.amount}"


class Expense(models.Model):
    CATEGORY_CHOICES = [
        ('Food', 'Food'),
        ('Rent', 'Rent'),
        ('Transport', 'Transport'),
        ('Shopping', 'Shopping'),
        ('Education', 'Education'),
        ('Healthcare', 'Healthcare'),
        ('Entertainment', 'Entertainment'),
        ('Other', 'Other'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.category} - {self.amount}"


class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    month = models.DateField()

    def __str__(self):
        return f"{self.category} - {self.amount}"


class SavingsGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    saved_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )
    target_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name