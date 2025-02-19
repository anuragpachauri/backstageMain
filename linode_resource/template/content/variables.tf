variable "linode_token" {
  description = "Linode API Token"
  type        = string
  sensitive   = true
  # default     = "facdddfc7ef238a8d431fe7cd9f6611171e86bab96c1e27e23f8f84a6d8d024f"

}

variable "vm_label" {
  description = "The label for the Linode instance"
  type        = string
}

variable "region" {
  description = "Linode region to deploy the instance"
  type        = string
  default     = "us-central"
}

variable "instance_type" {
  description = "The Linode instance type"
  type        = string
  default     = "g6-standard-1"
}

variable "admin_password" {
  description = "Root password for the Linode instance"
  type        = string
  sensitive   = true
}

variable "ssh_key" {
  description = "SSH Public Key for authentication"
  type        = string
}

variable "tagvalue" {
  description = "Tag for the Linode instance"
  type        = string
}

variable "swap_size" {
  description = "Swap size for the instance"
  type        = number
  default     = 256
}

variable "private_ip" {
  description = "Enable private IP"
  type        = bool
  default     = true
}
