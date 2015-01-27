# Write a command line application in ruby that prints all prime numbers between 1 and 100
# Do not just copy and paste these numbers, you should programmatically determine which numbers are prime.
# Do not use Prime.each
# Your program should run once and then exit
# Here is a snippet of sample output:

array = []

i = 0

while i < 101 do

		if i % 2 != 0 && i % 3 != 0
			array.push(i)
		end
	i += 1
end

puts array




# array = [1, 2, 3, 4, 5]

# array.each do |num|
# 	puts num
# end


# Make an array of the following characters: Mario, Luigi, Peach, Toad.

# Print out each character name using the each method.
# Print out the uppercased version of each character using an each method.

# characters = ['Mario', 'Luigi', 'Peach', 'Toad']

# characters.each do |x|
# 	puts x.upcase
# 	puts x.capitalize
# 	puts x.titlecase
# end

# ABOVE IN JAVASCRIPT
# var char = ['mario', 'luigi', 'peach', 'toad']

# 	char.forEach(function(x){
# 		console.log(x)
# 	})



# Iterate over each pair and print out "company has the following characters: characters."

# char = {
#   "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
#   "Sega" => ["Sonic", "Tails", "Robotnick"],
#   "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
# }

# char.each do |x|
# 	puts "#{x[0]} has the following characters #{x[1]}"
# end

# char.each do |key, value|
# 	puts "#{key} wears a #{value} bandana"
# end

# char.each do |key, value|
# 	puts "#{key} has the following characters: "
# 	value.each do |character|
# 		puts character
# 	end
# end




# Select each name that has a "c" in it and print out the resulting array.
# char = ["Mario", "Luigi", "Peach", "Toad", "Sonic", "Tails", "Robotnick", "Crash Bandicoot", "Nathan Drake", "Solid Snake"]

# char.each do |x|
# 	if x.include?('c') == true
# 		puts x
# 	end
# end

# OR

# c = characters.select do |character|
# 	word = character.upcase
# 	word.include?('c')
# end

# puts c









# select all the even numbers out of an array of numbers
# numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# this is the same as writing "do" and "end"
# evens = numbers.select {|n| n%2 == 0}

# puts evens

# puts numbers



# Map over the array and capitalize each character (i.e. MARIO)
# Map will give you back a different array, without altering the original one
# char = ["Mario", "Luigi", "Peach", "Toad", "Sonic", "Tails", "Robotnick", "Crash Bandicoot", 
#{}"Nathan Drake", "Solid Snake"]

# char.each do |x|
# 	puts x.upcase
# end

# caps = char.map do |character|
#   character.upcase
# end

# puts char
# puts caps


# # How to use MAP, does not change original array
# numbers = [1, 2, 3, 4, 5, 6]

# mult_by_3 = numbers.map do |num|
#   num * 3
# end

# puts numbers
# puts mult_by_3






# Write a program that asks the user for their favorite letter.
# Take the following array and return only the names that contain that letter (using select).

# For example, if I enter in J, it would return ["Janet"]

# Bonus 1: Print each matching name on its own line using each.

# Bonus 2: Do this in JavaScript

# names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", "Pietro", "Devyn", "Heaven", "Oma", "Astrid"]

# puts "what is your favorite letter muggle?"

# fav = gets.chomp.upcase
# i = 0

# names.each do |x|
# 	while i < names.length
# 		real = names[i].upcase
# 		if real.include?(fav)
# 			puts names[i]
# 		end
# 		i += 1
# 	end
# end




# Write a program that will prompt the user for a number and print out that number squared.
# For example: The user enters 3 and the program prints out 9 (3^2).

# Hint: Exponents in Ruby look like this:

# puts "enter a number between 1 and 100"

# num = gets.chomp.to_i

# if num > 100 || num < 1
# 	return
# else
# 	puts num*num
# end





# Write a program that will prompt the user for a number until the user enters end.
# The program will add each element to an array and print out the array with each element squared.

# Note: You have to use map. Don't just square each number before putting it into the array.

# Bonus 1: Print out each element in that array on its own line.

# i = 0
# numbers = []

# while i == 0
  
#   puts 'enter as many numbers as you want and enter "end" when you are done'
#   input = gets.chomp

#   if input == 'end'
#     i += 1
#   else
#     numbers.push(input)
#   end

#   puts numbers
# end










# Write a ruby command line application that prints the numbers 1 - 100 to the terminal.

# If a number is divisible by 3, print the word fizz that number many times.
# If a number is divisible by 5, print the word buzz. The word buzz should have that number many "z"s.
# If a number is divisible by both 3 and 5, print the string "fizzbuzz again? really?"

# i = 0

# while i < 100
# 	word1 = 'fizz'
# 	word2 = 'buzz'
# 	letter = 'z'

# 	if i%3 == 0 && i%5 == 0
# 		puts "fizzbuzz again? really?"
# 	elsif i%5 == 0
# 		puts word2 + letter*i
# 	elsif i%3 == 0 
# 		puts word1*i
# 	else
# # 		puts i
# # 	end

# # 	i += 1
# # end



# # Write a command line application in ruby that asks the user for a list of adjectives, 
# # a list of verbs, and a list of nouns.
# # Using the following script, have a random adjective from the user's list of adjectives 
# # replace the word ADJECTIVE, 
# # replace the word VERB using the verbs provided by the user in order, 
# # and replace the word NOUN with the nouns provided by the user in reverse order.
# # If the user's lists are too short repeat the words from the appropriate list.



# puts 'enter some adjectives'

# adj = gets.chomp.downcase

# puts 'enter some verbs'

# verb = gets.chomp.downcase

# puts 'enter some nouns'

# noun = gets.chomp.downcase


# adjArr = adj.split(' ')
# verbArr = verb.split(' ')
# nounArr = noun.split(' ')




# string = "Here's the NOUN of a ADJECTIVE NOUN
# Who was VERBing up three very ADJECTIVE NOUNs.
# All of them had NOUN of ADJECTIVE, like their NOUN,
# The ADJECTIVE one in NOUN.

# Here's the NOUN, of a NOUN named NOUN,
# Who was busy with three NOUNs of his own,
# They were four NOUNs, VERBing all together,
# Yet they were all ADJECTIVE.

# Till the one day when the NOUN met this NOUN
# And they knew it was much more than a NOUN,
# That this NOUN must somehow VERB a NOUN.
# That's the way we all VERB the ADJECTIVE NOUN."





























