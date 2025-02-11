export interface StackEntry {
  uid: string;
  _version: number;
  locale: string;
  ACL: {};
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  tags: [];
  title: string;
  updated_at: string;
  updated_by: string;
  url: string;
  publish_details: {
    time: string;
    user: string;
    environment: string;
    locale: string;
  };
}
