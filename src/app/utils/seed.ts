import { User } from '../models/userModel.js';

export const seedAdmin = async () => {
  try {
    const adminEmail = '9331966jubair@gmail.com';
    const adminPassword = '9331966jubair';

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      await User.create({
        name: 'Super Admin',
        email: adminEmail,
        password: adminPassword, // Will be hashed by pre-save hook
        role: 'admin',
      });
      console.log('✅ Default Admin User Created Successfully');
    } else {
      console.log('ℹ️ Default Admin User Already Exists');
    }
  } catch (error) {
    console.error('❌ Failed to seed admin user:', error);
  }
};
