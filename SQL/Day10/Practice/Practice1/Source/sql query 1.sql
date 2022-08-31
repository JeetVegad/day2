select * from employee3
declare @id varchar(20),@name  varchar(50),@salary int
declare cur_salary cursor
static for 
select empid,firstname,salary from employee3
open cur_salary
if @@CURSOR_ROWS>0
begin 
fetch next from cur_salary into @id,@name,@salary
while @@FETCH_STATUS =0 
begin
print @id +' '+' '+ @name +' '+convert(varchar(20), @salary)
fetch next from cur_salary into @id,@name,@salary
end 
end
close cur_salary
DEAllocate cur_salary
