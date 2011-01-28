class FixInquiry < ActiveRecord::Migration
  def self.up
    remove_column :inquiries, :user_id
    add_column :inquiries, :name, :string
    add_column :inquiries, :email, :string
    
  end

  def self.down
    add_column :inquiries, :user_id, :integer
    remove_column :inquiries, :name
    remove_column :inquiries, :email
  end
end
