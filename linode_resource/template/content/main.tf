terraform {
  required_providers {
    linode = {
      source = "linode/linode"
    }
  }
}

# Configure the Linode Provider
provider "linode" {
  token = var.linode_token
}

# Create a Linode instance
resource "linode_instance" "web" {
  label           = var.vm_label
  image           = "linode/ubuntu22.04"
  region          = var.region
  type            = var.instance_type
  authorized_keys = [var.ssh_key]
  root_pass       = var.admin_password

  tags       = [var.tagvalue]
  swap_size  = var.swap_size
  private_ip = var.private_ip
}
