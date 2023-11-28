from django.db import models

class Problem(models.Model):
    question = models.CharField(max_length=255)

    answer1 = models.CharField(max_length=255)
    answer1_is_true = models.BooleanField(default=False)

    answer2 = models.CharField(max_length=255)
    answer2_is_true = models.BooleanField(default=False)

    answer3 = models.CharField(max_length=255)
    answer3_is_true = models.BooleanField(default=False)

    answer4 = models.CharField(max_length=255)
    answer4_is_true = models.BooleanField(default=False)
