total_price = 150
last_price = total_price - 100

if last_price >= 0
  puts "みかんを購入。所持金#{last_price}円余り。"
elsif last_price == 0
  puts "みかんを購入。所持金は0円。"
else last_price <= 0
  puts "みかんを購入することはできません。"
end
