create table planetID(
 ID int not null,
 Item int not null,
 Value int not null
)

INSERT INTO PlanetID VALUES 
(4, 23, 66),
(1, 12, 59),
(3, 66, 24)

SELECT * FROM PlanetID 

create clustered index onid
on planetID(Id)

create  nonclustered index onvalue
on planetID(value)

drop index onvalue
on planetID