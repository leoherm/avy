# -*- coding: utf-8 -*-
"""
Created on March 3 2018

@author: Leo
"""

from flask import Flask, render_template #, send_static_file
app= Flask(__name__)   # When Python runs this program name is assigned "main"

@app.route('/')
def home():
    return app.send_static_file('avyhome.html')

@app.route('/day-by-day/')
def dot2():
    return app.send_static_file('day_by_day.html')

@app.route('/timelapse/')
def fourTwo():
    return app.send_static_file('timelapse.html')

@app.route('/about/')
def about():
    return app.send_static_file('about.html')
"""
@app.route('/threefive/')
def buttFade():
    return app.send_static_file('gmap3dot5.html')

@app.route('/one/')
def dot1():
    return app.send_static_file('gmap1dot0.html')

@app.route('/four0/')
def four0():
    return app.send_static_file('gmap4dot0.html')

@app.route('/full/')
def fullAni():
    return app.send_static_file('gmap4dot1.html')
"""


if __name__ == "__main__":
    app.run(debug=True)
