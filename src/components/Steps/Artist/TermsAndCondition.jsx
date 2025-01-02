import { Checkbox } from "../../../components/ui/checkbox"; // Custom Checkbox component

const TermsAndCondition = () => {
  return (
    <div className="space-y-4">
      {/* Terms in Bullet Points */}
      <ul className="list-disc pl-5 text-sm">
        <li>
          You must be a current student or recent graduate to use this platform.
        </li>
        <li>All music content uploaded must be original and created by you.</li>
        <li>
          By joining, you agree to collaborate and share your music with other
          artists on the platform.
        </li>
        <li>
          Respect the work of fellow artists — plagiarism will result in account
          suspension.
        </li>
        <li>
          Be mindful of your school rules while creating or sharing content
          through the platform.
        </li>
        <li>
          Any content that promotes violence, hate speech, or illegal activities
          is strictly prohibited.
        </li>
        <li>
          You are responsible for ensuring your uploaded content meets all
          copyright requirements.
        </li>
        <li>
          We are not responsible for any damages or legal issues arising from
          the content you upload.
        </li>
      </ul>

      {/* Checkbox for agreement */}
      <div className="flex items-center mt-4">
        <Checkbox />
        <label htmlFor="terms" className="ml-2 text-sm">
          I agree to the Terms and Conditions
        </label>
      </div>
    </div>
  );
};

export default TermsAndCondition;
