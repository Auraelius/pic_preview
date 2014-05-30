require 'sinatra'

get '/' do
  erb :index
end

post '/form-echo' do
  erb :form_echo

end

__END__