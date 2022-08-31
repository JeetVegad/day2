--CREATE DATABASE MODULE1
--USE MODULE1
CREATE TABLE COUNTRIES(
			CountryId INT,
			CountryName VARCHAR(255),
			CHECK(CountryName IN ('Italy','India','China')),
			RegionId VARCHAR(255)
)