# Generated by Django 5.0.6 on 2024-06-14 12:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("prediction", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="item",
            name="reviewInfo",
            field=models.JSONField(default=list),
        ),
    ]
