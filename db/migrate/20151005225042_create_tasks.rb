class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :done
      t.references :user

      t.timestamps null: false
    end
  end
end
