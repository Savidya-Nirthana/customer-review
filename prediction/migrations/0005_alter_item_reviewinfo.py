# Generated by Django 5.0.6 on 2024-06-14 14:06

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("prediction", "0004_alter_item_reviewinfo"),
    ]

    operations = [
        migrations.AlterField(
            model_name="item",
            name="reviewInfo",
            field=models.JSONField(default=list),
        ),
    ]