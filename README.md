# avy
Mt Washington avy forecasts- deployed to Heroku

HTML formatting falls apart on small screens/ mobile

Most day's ratings were scraped from the MWAC website- I had manually saved
the HMTL files then later scraped with some Python code.

On the days when I did not save the HTML files, I manually entered the ratings
for each zone.  I used the text descriptions from the archive section of the
MWAC site.   Often the ratings for the runout zones in Tucks and Hunts are not
explicitly given in the archive.  In those cases I assigned the highest
rating for the ravine to its runout zone.

There is a set of tools to scrape the MWAC website each day and build the
ratings files.  These will be deployed at the start of the 2018-19 season

All contributions are welcome.
