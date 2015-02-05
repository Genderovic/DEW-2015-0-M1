class Message < ActiveRecord::Base
    Pusher.app_id = '105992'
    Pusher.key = 'bf9acd5ec2b4ae3638b1'
    Pusher.secret = '222f16c67182cb76e48c'
    
    after_create :send_to_pusher
    
    def send_to_pusher
        logger.info "hi?"
        Pusher['AppChateo'].trigger("message:create", self.to_json)
    end
end
