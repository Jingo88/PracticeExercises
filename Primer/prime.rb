# Write a command line application in ruby that prints all prime numbers between 1 and 100
# Do not just copy and paste these numbers, you should programmatically determine which numbers are prime.
# Do not use Prime.each
# Your program should run once and then exit
# Here is a snippet of sample output:

array = []

i = 0

while i < 101 do

		if i % 2 != 0 && i % 3 != 0 || i == 2
			array.push(i)
		end
	i += 1
end

puts array

